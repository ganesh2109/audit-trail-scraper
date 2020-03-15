import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CasesService } from './modules/cases/cases.service';
import { SetupAuditTrailService } from './modules/setupaudittrail/setupaudittrail.service';
import { OrdersService } from './modules/orders/orders.service';
import { UnauthorizedException, Logger } from '@nestjs/common';
import roles from '../../utils/role.constants';
import * as crypto from 'crypto';

@WebSocketGateway()
export class LiveDataGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private server: Server;

  private logger = new Logger(this.constructor.name);
  private clients: Map<string, Socket> = new Map<string, Socket>();

  public constructor(
    private readonly satService: SetupAuditTrailService,
  ) {
    setInterval(() => this.emitData(), 3000);
  }

  /**
   * Responsible for emitting all of the data required for the frontend to all of the clients connected.
   */
  private async emitData() {
    // Retrieve and prepare all of the data once
    /*let dashboardWontoday = {
      type: 'websocket:dashboard:wontoday',
      payload: this.createHash(await this.oppService.getOpportunityWonToday()),
    };

    let dashboardRevenuetoday = {
      type: 'websocket:dashboard:revenuetoday',
      payload: this.createHash(await this.oppService.getOpportunityRevenueWonToday()),
    };*/

    let adminlogins = {
      type: 'websocket:admin-logins',
      payload: this.createHash(await this.satService.getAdminLoginInfo()),
    };

    // Begin emitting the data to the front end for all of the connected clients
    this.clients.forEach(async client => {
      client.emit('action', adminlogins);
    });
  }

  /**
   * This will create a hash response for the payload of one of the several events which gets emitted to the front
   * end. This is used to help the frontend determine if the data set being returned is new and requires an update
   * in the UI.
   *
   * @param payload The payload being returned to the user in the UI.
   */
  private createHash(payload: any): any {
    const shasum = crypto.createHash('sha1');
    shasum.update(JSON.stringify(payload));

    return {
      hash: shasum.digest('hex'),
      data: payload,
    };
  }

  /**
   * Called when a user connects to the server. When this is called we also have to manually verify that the user
   * has a valid session as NestJS out of the box does not support guards for WebSockets.
   *
   * @param client The socket.io client connection
   */
  public handleConnection(client: Socket) {
    try {
      this.verifySession(client);
    } catch (e) {
      this.logger.error(`Unauthorized client, refusing connection`);
      client.disconnect();
      return;
    }

    this.clients.set(client.id, client);
    this.emitData();
  }

  /**
   * Checks that the given client has a valid session and valid role required for accessing the websocket.
   *
   * @param client The socket.io client connection
   */
  private verifySession(client: Socket): void {
    try {
      // Extract the session from the client handshake
      // @ts-ignore
      let user = client.handshake.session.passport.user;
      console.log('USER::::'+user);
      // Ensure the user has the right role
      if (!user.roles.includes(roles.ADMIN)) {
        throw new UnauthorizedException();
      }
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  /**
   * Called when the user disconnects from the websocket. We also verify that the request is valid for their session
   * to avoid users disconnecting other users.
   *
   * @param client The socket.io client connection
   */
  public handleDisconnect(client: Socket) {
    this.verifySession(client);
    this.clients.delete(client.id);
  }
}

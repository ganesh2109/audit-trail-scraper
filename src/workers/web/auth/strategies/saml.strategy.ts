import { Strategy } from 'passport-saml';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { readFileSync } from 'fs';
import { join } from 'path';
import roles from '../../../utils/role.constants';

@Injectable()
export class SamlStrategy extends PassportStrategy(Strategy, 'saml') {
  public constructor() {
    var isProduction = process.env.NODE_ENV == 'production';
    var idpCertificate;
    var spPrivate, sppublic;

    //open ssl commands for public private key
    //openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem
    //openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out server.crt

    if (isProduction) {
      idpCertificate = process.env.SAML_IDP_CERTIFICATE;
      spPrivate = process.env.SAML_SP_PRIVATEKEY;
      sppublic = process.env.SAML_SP_PRIVATEKEY;
    } else {
      idpCertificate = readFileSync(join(__dirname, '..', '..', '..', '..', '..', 'keys', 'idppublic.crt'), 'utf8');
      spPrivate = readFileSync(join(__dirname, '..', '..', '..', '..', '..', 'keys', 'key.pem'), 'utf8');
      sppublic = readFileSync(join(__dirname, '..', '..', '..', '..', '..', 'keys', 'key.pem'), 'utf8');
    }

    super(
      {
        callbackUrl: process.env.SAML_ACS_URL,
        entryPoint: process.env.SAML_IDP_ISSUER,
        issuer: process.env.SAML_ENTITYID,
        identifierFormat: null,
        // Service Provider private key
        decryptionPvk: spPrivate,
        // Service Provider Certificate
        privateCert: sppublic,
        // Identity Provider's public key
        cert: idpCertificate,
        validateInResponseTo: false,
        disableRequestedAuthnContext: true,
        logoutUrl: process.env.SAML_IDP_LOGOUT_URL,
      },
      async (profile, done) => {
        console.log('profile: ' + JSON.stringify(profile, null, 2));

        return done(null, {
          ...profile,
          roles: [roles.ADMIN],
        });
      }
    );
  }
}

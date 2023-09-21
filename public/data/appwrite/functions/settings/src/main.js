import { Client, Databases, Query, Users, ID, Account } from 'node-appwrite';

export default async ({ req, res, log, error }) => {

  if (req.method === 'GET') {
    return res.send('Settings v0.0.1');
  }


  if (req.method === 'POST') {

    
    // Check if User JWT is set.
    if (!req.headers['x-appwrite-user-jwt']) {
      return res.json({ ok: false, message: 'Captcha Token Missing' }, 401);
    }

    const client = new Client()
    .setEndpoint('https://panel.kbve.com/v1')
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

    const JWTclient = new Client()
    .setEndpoint('https://panel.kbve.com/v1')
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setJWT(req.headers['x-appwrite-user-jwt'])

    const JWTaccount = new Account(JWTclient)

    let uuid = '';
    let user_email = '';
    //let username = '';

    try {
      const { $id, email } = await JWTaccount.get();
        if($id) {
          log(`User ID: ${$id}`)
          uuid = $id;
          user_email = email;
        }
    } catch (e) {
      error(e)
      return res.json({ok: false, message: 'Unable to get account information from JWT'}, 401)

    }


    const data = JSON.parse(req.body);

    switch(req.path) {
      
      case '/pgp':
        return res.json({ ok: true, message: 'PGP was updated'})

      default:
        return res.json({
          ok: false,
          message: 'Path was missing'
        }, 401);
    }
  }
};

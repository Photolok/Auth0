function fetchUserProfile(accessToken, context, callback) {
  request.get(
    {
      url: 'https://api.photolok.net/oauth/userinfo',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      }
    },
    (err, resp, body) => {
      if (err) {
        return callback(err);
      }
      if (resp.statusCode !== 200) {
        return callback(new Error(body));
      }
      let bodyParsed;
      try {
        bodyParsed = JSON.parse(body);
      } catch (jsonError) {
        return callback(new Error(body));
      }
      const profile = {
        user_id: bodyParsed.sub,
        email: bodyParsed.email,
        email_verified : true,
        name : bodyParsed.firstName + ' ' + bodyParsed.lastName
      };
      callback(null, profile);
    }
  );
}

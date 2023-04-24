import { graphql } from "@w/GraphQL";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";

//! CREDIT TO https://github.com/rishipurwar1/

const AWAuth = () => {
  const [userProfile, setProfile] = useState(null);

  //?         [REGISTER] : [START]
  const register = async (email, password, name) => {
    const response = await graphql.mutation({
      query: `mutation (
                  $email: String!,
                  $password: String!,
                  $name: String
              ) {
                  accountCreate(
                      userId: "unique()",
                      email: $email,
                      password: $password,
                      name: $name
                  ) {
                    _id
                  }
              }`,
      variables: {
        email: email,
        password: password,
        name: name,
      },
    });

    if (response.errors) {
      throw response.errors[0].message;
    }
  };
  //?         [REGISTER] : [END]
  //?         [EMAIL_LOGIN] : [START]
  const emailLogin = async (email, password) => {
    const response = await graphql.mutation({
      query: `mutation (
              $email: String!,
              $password: String!,
          ) {
            accountCreateEmailSession(
              email: $email,
              password: $password,
          ) {
              _id
            }
          }`,
      variables: {
        email: email,
        password: password,
      },
    });

    if (response.errors) {
      throw response.errors[0].message;
    }
  };
  //?         [EMAIL_LOGIN] : [END]

  //?         [SESSION_LOGOUT] : [START]

  const sessionLogout = async () => {
    const response = await graphql.mutation({
      query: `mutation {
                accountDeleteSession(
                    sessionId: "current"
                ) {
                    status
                }
            }`,
    });

    if (response.errors) {
      throw response.errors[0].message;
    }
  };

  //?         [SESSION_LOGOUT] : [END]
  //?         [QUERY_ACCOUNT] : [START]
  const queryAccount = async () => {
    const response = await graphql.query({
      query: `query {
                accountGet {
                    _id
                    name
                    emailVerification
                    email
                }
            }`,
    });
    return response.data.accountGet;
  };
  //?         [QUERY_ACCOUNT] : [END]
  //?         [CONFIRM_EMAIL] : [START]
const confirmEmailVerification = async (userId, secret) => {
    const response = await graphql.mutation({
      query: `mutation (
          $userId: String!,
          $secret: String!,
      ) {
          accountUpdateVerification(
              userId: $userId,
              secret: $secret
          ) {
              _id
          }
      }`,
      variables: {
        userId: userId,
        secret: secret,
      },
    });

    if (response.errors) {
      throw response.errors[0].message;
    }
  };
  //?         [CONFIRM_EMAIL] : [END]

  //!         [useEffects]

  useEffect(() => {
    const queryUser = async () => {
      const userData = await queryAccount();
      setProfile(userData);
    };
    queryUser();
  }, []);

  return {
    register,
    emailLogin,
    sessionLogout,
    userProfile,
    confirmEmailVerification,
  };
};

export default AWAuth;

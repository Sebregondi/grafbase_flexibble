export const getUserQuery = `
    query GetUser($email: String!) {
        user(by: { email: $email }) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`

export const createUserMutation = `
    mutation createUser($input: userCreateInput!) {
        userCreate(input: $input) {
            user {
                name
                email
                avatarUrl
                description
                githubUrl
                linkedinUrl
                id
            }
        }
    }
`
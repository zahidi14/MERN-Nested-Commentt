http://url.api/version/$Group/$endpoint

Error Response Status

200 - OK ==> Api call status OK
201 - CREATED ==> Post request sucess
400 - BAD REQUEST ==> Error client side
401 - NOT AUTHORIZED ==> User not permitted
403 - FORBIDEN ==> user not allowed
404 - NOT FOUND ==> No endpoint found
500 - BAD REQUEST ==> Internal server error
501 - BAD GATEWAY ==> Invalid Response

-- Group Auth

    [1] -- Login
          http://url.api/v1/auth/login

          req:
            {
                username : "username",
                password : "password"
            }

          res:
            {
                message: : "success"
                data: {
                    username : "username",
                    password : "password"
                }
            }
          err:
            {
                404: "User Not Found"
            }

    [2] -- Register
        http://url.api/v1/auth/register/

        req:
            {
                name     : "name"
                username : "username",
                password : "password"
            }

        res:
            {
                message : "Successfully Registered",
                data:{
                    name     : "name"
                    username : "username",
                    password : "password"
                }
            }

        err:
            {
                400:"Invalid Input",
            }

--- Group main

    res:
    {
        "message" : "Posted Successfully",
        "data"    : {
            "id"    :1,
            "title" :"Title",
            "image" :"image.jps",
            "content"  :"Lorem Ipsum Dolor",
            "created_at"    : "12-12-2023",
            "author"    :{
                "authId"    : 1,
                "name"      : "John Doe"s
            }
        }
    }

    [1] -- CREATE BLOG
    [2] -- READ BLOG
    [3] -- UPDATE BLOG
    [4] -- DELETE

    mongoose
    express
    cors
    axios
    body parser
    

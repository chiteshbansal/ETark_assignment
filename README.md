# ETark_assignment
The project contains Three api end points:
  i. /signup 
        {
          method:"POST",
          body:{
            name::"",
            email:"",
            password:"",
          }
        }
        
  ii. /login 
        {
          method:"POST",
          body:{
            email:"",
            password:"",
          }
        }
        
   iii. /home 
        {
          method:"get",
          body:{
            userId:"",
            token:"",// if logged in else show error message
          }
        }

// import React, { Fragment } from "react";

// function User() {
//   return (
//     <Fragment>
//       <p>This is User Login page</p>
//     </Fragment>
//   );
// }

// export default User;
import React, {useState} from 'react';

import { useHistory } from "react-router-dom";
import { Form, Input, Button, Alert} from 'antd';
import 'antd/dist/antd.css';
import './User.css';
import { Container } from '@material-ui/core';
// import Item from 'antd/lib/list/Item';

const Login = () => {
    const [visible, setVisible] = useState(false);
    const history = useHistory();
     const login = async (values) => {
    //     console.log("sdkfljsdlkfj")
    //     const data = await adminControllers.loginAdmin(values.email, values.password);
    //     console.log(dat: ${JSON.stringify(data)})
    //     if(data.status === "success") {
    //         histroy.push('/admin');
    //     }
        // else {
        //     setVisible(true);
        // }
    //     return data;
    } 
    const handleClose = () => {
        setVisible(false);
    };
    return (
        <div>
       
        
        <div style={{'paddingTop': '5vh', 
        justifyContent: "center"
      }} className="login-container1">
          <diV style={{'paddingTop': '5vh', justifyContent:"center"
      }} className = "center"> Please Login </diV>
            <Form style={{'paddingTop': '5vh'}}
            className = "test"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={login}
            >
            {visible ? (
            <Alert message="Email or password is wrong!" type="error" closable afterClose={handleClose} />
            ) : null}
            <Form.Item 
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Enter your email please!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Enter Password !' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
        
    
    </div></div>
    
   );
}

export default Login;

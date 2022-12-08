import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})


// add this


const Login = () => {
return (
 <div>
  <h1>Login</h1>
 <p>This is the login page for our application.</p>
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
     }}
     onError={() => {
     console.log('Login Failed');
   }}
  />
 </div>
);
};
export default Login;
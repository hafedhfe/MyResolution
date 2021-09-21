import React from 'react'
import Footer from '../partials/Footer'  

 import AccountsUI from "../account/AccountsUI";
//<a  href="/login-Sign-up"  >Login/Sign-up</a> <AccountsUI />
export const MainLayout = ({content}) => (

    <div className="main-layout">
     
       <header  >

            <h2 className="site-title"> <a href="/">
                <img className="fit-picture" src="/logo.png" alt="todo list logo"    />
             </a> </h2>

            <nav>
                <a href="/">TodoList</a>
                <a href="/dashboard">Dashboard</a>

                <a  href="/login"  >Login/Sign-up</a>
                <a  href="/logout" className="logout" >logout</a>
                {/*<AccountsUI />*/}

            </nav>

         </header>
       <main>
          {content}
       </main> 
       
       
     
    <footer className="Footer"></footer>
    </div>
)
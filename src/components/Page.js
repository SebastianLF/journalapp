import React, { useState } from "react"
import Header from './Header'
import SignForm from './SignForm'
import Dashboard from "./Dashboard";

function Page() {

  const [data, setData] = useState({ title: 'Signin', url: '/signin', buttonLabel: 'Sign in' })
  const [isAuth, setIsAuth] = useState(false)

  let content = (
    <SignForm
      title={data.title}
      url={data.url}
      buttonLabel={data.buttonLabel}
      setIsAuth={setIsAuth}
    />
  )

  if (isAuth) {
    content = <Dashboard />
  }

  return (
    <div>
      <Header isAuth={isAuth} setForm={setData} />
      { content }
    </div>
  )
}

export default Page
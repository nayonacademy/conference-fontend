import React from 'react';
class HeaderSimple extends React.Component{
    render(){
        return(

<div className="co nav">
  <div className="logo-container">
    <a href="../index.html" className="logo-link w-inline-block" />
  </div>
  <form action="/search" className="nav-search w-form">
    <input
      type="search"
      className="search-input-nav w-input"
      maxLength={256}
      name="query"
      placeholder="Search…"
      id="search"
      required
    />
    <input
      type="submit"
      defaultValue="Search"
      className="search-button-2 w-button"
    />
  </form>
  <div className="nav-button-container">
    <a href="../dashboard/overview.html" className="sign-in-button w-button">
      Sign in
    </a>
    <a href="../login.html" className="get-started-button w-button">
      Get Started
    </a>
  </div>
</div>


        )
    }
}
export default HeaderSimple;
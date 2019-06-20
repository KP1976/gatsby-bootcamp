import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Contact me: kpawlowski1976@gmail.com</p>
      <p>
        Link to GitHub Profile{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage

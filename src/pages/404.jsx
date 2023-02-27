import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"

const styles = {
  image: {
    textAlign: 'center',
    backgroundImage:"url('https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '50vw',
    height: '50vh'
  }
};

const NotFound = () => (
  <Layout>
    <div style={styles.image}>
    </div>
  </Layout>
)

export default NotFound

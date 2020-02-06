import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, withRouter } from "react-router-dom";
import AOS from "aos/dist/aos";
import Navbar from "./Navbar";
import PropsRoute from "../../shared/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import urlify from "../../shared/urlify";
import Footer from "./Footer";
import "aos/dist/aos.css";
import CustomStyles from "./CustomStyles";
import smoothScrollTop from "../../shared/smoothScrollTop";
import CookieRulesDialog from "./CookieRulesDialog";
import CookieConsent from "./CookieConsent";
import dummyBlogPosts from "../dummy_data/blogPosts";

AOS.init();

class Main extends PureComponent {
  state = {
    selectedTab: null,
    mobileDrawerOpen: false,
    blogPosts: [],
    dialogOpen: null,
    cookieRulesDialogOpen: false
  };

  /**
   * We will only query rows from the database which date is below the MaxDate
   */
  blogPostsMaxUnix = Math.round(new Date().getTime() / 1000);

  componentDidMount() {
    this.fetchBlogPosts();
  }

  selectHome = () => {
    smoothScrollTop();
    document.title = "WaVer - React template for an saas app";
    this.setState({ selectedTab: "Home" });
  };

  selectBlog = () => {
    smoothScrollTop();
    document.title = "WaVer - Blog";
    this.setState({ selectedTab: "Blog" });
  };

  openLoginDialog = () => {
    this.setState({ dialogOpen: "login", mobileDrawerOpen: false });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: null });
  };

  openRegisterDialog = () => {
    this.setState({
      dialogOpen: "register",
      mobileDrawerOpen: false
    });
  };

  openTermsDialog = () => {
    this.setState({ dialogOpen: "termsOfService" });
  };

  handleMobileDrawerOpen = () => {
    this.setState({ mobileDrawerOpen: true });
  };

  handleMobileDrawerClose = () => {
    this.setState({ mobileDrawerOpen: false });
  };

  switchSelectedTab = tab => {
    this.setState({ selectedTab: tab });
  };

  openChangePasswordDialog = () => {
    this.setState({ dialogOpen: "changePassword" });
  };

  addBlogPosts = postArray => {
    let { blogPosts } = this.state;
    blogPosts = [...blogPosts];
    Object.values(postArray).forEach(post => {
      Object.values(blogPosts).forEach(blogPost => {
        if (post.id !== blogPost.id) {
          blogPosts.push(post);
        }
      });
    });
  };

  fetchBlogPosts = () => {
    /**
     * You would fetch this from the server, however we gonna use the example values from state here
     */
    this.blogPostsMaxUnix = dummyBlogPosts[dummyBlogPosts.length - 1].date;
    const blogPosts = dummyBlogPosts.map(blogPost => {
      const post = blogPost;
      post.url = `/blog/post/${urlify(post.title)}?id=${post.id}`;
      return post;
    });
    this.setState({
      blogPosts
    });
  };

  handleCookieRulesDialogOpen = () => {
    this.setState({ cookieRulesDialogOpen: true });
  };

  handleCookieRulesDialogClose = () => {
    this.setState({ cookieRulesDialogOpen: false });
  };

  getOtherArticles = id => {
    const { blogPosts } = this.state;
    return blogPosts.filter(blogPost => blogPost.id !== id);
  };

  render() {
    const { location, setLoggedIn } = this.props;
    const {
      selectedTab,
      mobileDrawerOpen,
      blogPosts,
      dialogOpen,
      cookieRulesDialogOpen
    } = this.state;
    return (
      <Fragment>
        <div className="bg-white">
          <CustomStyles />
          {!cookieRulesDialogOpen && (
            <CookieConsent
              handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
            />
          )}
          <CookieRulesDialog
            open={cookieRulesDialogOpen}
            onClose={this.handleCookieRulesDialogClose}
          />
          <Navbar
            selectedTab={selectedTab}
            selectTab={this.selectTab}
            openLoginDialog={this.openLoginDialog}
            openRegisterDialog={this.openRegisterDialog}
            closeDialog={this.closeDialog}
            dialogOpen={dialogOpen}
            mobileDrawerOpen={mobileDrawerOpen}
            handleMobileDrawerOpen={this.handleMobileDrawerOpen}
            handleMobileDrawerClose={this.handleMobileDrawerClose}
            setLoggedIn={setLoggedIn}
            openTermsDialog={this.openTermsDialog}
            openChangePasswordDialog={this.openChangePasswordDialog}
          />
          <Switch>
            {blogPosts.map(post => (
              <PropsRoute
                /* We cannot use the url here as it contains the get params */
                path={`/blog/post/${urlify(post.title)}`}
                component={BlogPost}
                title={post.title}
                key={post.title}
                src={post.imageSrc}
                date={post.date}
                location={location}
                content={post.content}
                addBlogPosts={this.addBlogPosts}
                otherArticles={this.getOtherArticles(post.id)}
              />
            ))}
            <PropsRoute
              exact
              path="/blog"
              component={Blog}
              location={location}
              selectBlog={this.selectBlog}
              blogPosts={blogPosts}
            />
            )
            <PropsRoute
              path="/"
              component={Home}
              location={location}
              selectHome={this.selectHome}
            />
            )
          </Switch>
          <Footer
            openLoginDialog={this.openLoginDialog}
            openRegisterDialog={this.openRegisterDialog}
            handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
          />
        </div>
      </Fragment>
    );
  }
}

Main.propTypes = {
  location: PropTypes.object.isRequired,
  setLoggedIn: PropTypes.func
};

export default withRouter(Main);
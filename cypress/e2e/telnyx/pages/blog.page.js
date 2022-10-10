class BlogPage{
    locator = {
    blog() {
            return cy.get('h1.Text-sc-5o8owa-0');
        }
    }
    headerBlog() {
            this.locator.blog().should('have.text', 'Blog');
    }
}

module.exports = new BlogPage();
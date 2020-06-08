class AppFooter extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <footer>
            <p>Submission Dicoding Kelas Belajar Fundamental Front-End Web Development <br><br>Fawaz 2020</p>
        </footer>
        `
    }
}

customElements.define('app-footer', AppFooter);
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <header>
            <a href="#" class="logo">CuciMata</a>
            <label for="cek">Menu</label>
            <input type="checkbox" id="cek">
            <nav>
                <a href="#" class="active">Home</a>
                <a href="https://github.com/inifawaz/latihan">Source Code</a>
            </nav>
        </header>
        `
    }
}

customElements.define('app-header', AppHeader)
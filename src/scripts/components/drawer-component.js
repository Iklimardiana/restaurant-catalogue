class Drawer extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    }
    
    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    }

    render(){
        this.innerHTML =`
        <div class="drawer">
            <p>MedianaFood</p>
            <ul class=drawer-list>
                <hr>
                <li><a class="drawer-item" href="/">Home</a></li>
                <hr>
                <li class="drawer-item"><a href="#/favorite">Favorite</a></li>
                <hr>
                <li class="drawer-item"><a target="_blank" href="https://github.com/iklimardiana" rel="noopener">About us</a></li>
                <hr>
            </ul>
        </div>
        `;
    }
}

customElements.define('drawer-component', Drawer);

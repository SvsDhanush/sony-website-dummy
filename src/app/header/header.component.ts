import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

// export class HeaderComponent implements AfterViewInit {

//   ngAfterViewInit(): void {
//     // Manually initialize Bootstrap dropdown functionality
//     const dropdownElement = document.getElementById('mySonyDropdown');
//     if (dropdownElement) {
//       new bootstrap.Dropdown(dropdownElement); // Initializes dropdown
//     }
//   }
// }

export class HeaderComponent implements OnInit, OnDestroy {
  toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
      searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
    }
  }

  openSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) {
      overlay.style.display = 'flex'; // Show the overlay
    }
  }

  closeSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) {
      overlay.style.display = 'none'; // Hide the overlay
    }
  }

  showSearchBar = false;

  toggleSearchBarNew() {
    this.showSearchBar = !this.showSearchBar;
    const searchDropdown = document.getElementById('searchDropdown');
    if (searchDropdown) {
      searchDropdown.style.display = this.showSearchBar ? 'block' : 'none';
    }
  }

  
  ngOnInit() {
    // Add the outside click event listener
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  ngOnDestroy() {
    // Remove the outside click event listener to avoid memory leaks
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }

  handleOutsideClick(event: Event) {
    const searchDropdown = document.getElementById('searchDropdown');
    const searchIcon = document.getElementById('searchIcon');

    if (
      searchDropdown &&
      searchIcon &&
      !searchDropdown.contains(event.target as Node) &&
      !searchIcon.contains(event.target as Node)
    ) {
      this.showSearchBar = false;
      searchDropdown.style.display = 'none';
    }
  }
}

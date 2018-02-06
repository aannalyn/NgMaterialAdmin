import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[navAccordion]'
})
export class NavAccordionDirective {

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  onClick($event) {

    let menuItem = this.elemRef.nativeElement.parentElement;
    let menuList = menuItem.parentElement;
    let hasSubmenu = this.elemRef.nativeElement.nextElementSibling; 
    let isMainMenu = menuItem.classList.contains('main-nav-item');

    this.removeAllClass('sub-nav-item-selected');      

    if (isMainMenu) {
      this.removeAllClass('main-nav-item-selected');
      this.addClass(menuItem, 'main-nav-item-selected');
      
      if (hasSubmenu) {
        let isOpen = hasSubmenu.classList.contains('sub-nav-open');        
        if (isOpen) {
          this.removeAllClass('sub-nav-open'); 
        } else {
          this.removeAllClass('sub-nav-open');           
          this.addClass(hasSubmenu, 'sub-nav-open');
        }
      } else {
        this.removeAllClass('sub-nav-open');
      }
    } else {
      this.addClass(menuItem, 'sub-nav-item-selected');      
    }
    
  }

  addClass(element, className) {
    this.renderer.addClass(element, className);
  }

  removeAllClass(className) {
    let elem = document.querySelector(`.${className}`);
    if (elem) this.renderer.removeClass(elem, className);
  }

}

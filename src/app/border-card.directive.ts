import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  private initialBackgrounColor: string = '#ffffff'
  private defaultBackground: string = '#42B2A6'

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder('#f5f5f5');
    this.setBorderRadius(15);
    this.setBackgroundColorCard(this.initialBackgrounColor);
  }
  @Input('pokemonBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
    this.setBackgroundColorCard(this.defaultBackground)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
    this.setBackgroundColorCard(this.initialBackgrounColor)

  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `3px solid ${color}`;
  }

  setBorderRadius(pixel: number) {
    this.el.nativeElement.style.borderRadius = `${pixel}px`
  }

  setBackgroundColorCard(color: string) {
    this.el.nativeElement.style.backgroundColor = `${color}`
  }
}

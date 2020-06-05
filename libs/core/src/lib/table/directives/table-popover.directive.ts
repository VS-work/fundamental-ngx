import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[fdTablePopover], [fd-table-popover]',
    host: {
        class: ''
    }
})
export class TablePopoverDirective {
    /** @hidden */
    @HostBinding('class')
    fdTablePopoverClass: string = 'fd-table__popover fd-table__popover--custom';
}
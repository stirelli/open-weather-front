import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'll-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput') searchInput: ElementRef;

  @Input() debounceTimeInput: boolean = true;
  @Input() placeholder: string = 'City';
  @Input() minLengthSearch: number = 3;

  @Output() searchTermChangedEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  private readonly DEBOUNCE_TIME: number = 500;
  private onDestroy$: Subject<void> = new Subject<void>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      searchTerm: ''
    });

    this.form.controls.searchTerm.valueChanges
      .pipe(
        skip(1),
        filter((term: string) => term.length >= this.minLengthSearch),
        debounceTime(this.debounceTimeInput ? this.DEBOUNCE_TIME : 0),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$)
      )
      .subscribe((term: string) => this.searchTermChangedEvent.emit(term));
  }

  public cancel(): void {
    this.form.controls.searchTerm.patchValue('');
  }

  public search(term: string): void {
    this.searchEvent.emit(term);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

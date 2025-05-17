// timer.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
    remainingTime!: { days: number; hours: number; minutes: number; seconds: number };
    private subscription!: Subscription;

    // Укажите конкретную дату (формат YYYY-MM-DDTHH:MM:SS)
    private targetDate: Date = new Date('2025-04-29T00:00:00');

    private padNumber(value: number): string {
        return value < 10 ? '0' + value : value.toString();
    }

    ngOnInit(): void {
        this.updateRemainingTime();

        // Обновление каждую секунду
        this.subscription = interval(1000).subscribe(() => {
            this.updateRemainingTime();
        });
    }

    private updateRemainingTime(): void {
        const now = new Date().getTime();
        const distance = this.targetDate.getTime() - now;

        if (distance <= 0) {
            this.remainingTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            if (this.subscription) {
                this.subscription.unsubscribe(); // Остановка таймера
            }
        } else {
            this.remainingTime = {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            };
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

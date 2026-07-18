import { Injectable, Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../interfaces/Cat';
import { Observable } from 'rxjs/internal/Observable';

const URL= "https://6a5b969064f700df5bd730ff.mockapi.io/Cats";

@Service()
export class CatDataService {
    private http = inject(HttpClient);

    public getCats(): Observable<Cat[]> {
        return this.http.get<Cat[]>(URL);
    }

    public editCat(id: number, updatedDay: string): Observable<Cat> {
        return this.http.put<Cat>(`${URL}/${id}`, { chosenDay: updatedDay });
    }

    public freeAllCats(id: number) {
        return this.http.put<Cat[]>(`${URL}/${id}`, { chosenDay: '' });
    }
}

import { Injectable, Service, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cat } from '../interfaces/Cat';
import { Observable } from 'rxjs/internal/Observable';

const URL= "https://mibvuhfnbmtouxcjlexe.supabase.co/rest/v1/Cats";
const ANON_KEY= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pYnZ1aGZuYm10b3V4Y2psZXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4MzMxNjYsImV4cCI6MjEwMzQwOTE2Nn0.cMDQ6hzwKmKRYhemjX6thPqzsn4tRA2ROVidxgT_yU8";

@Service()
export class CatDataService {
    private http = inject(HttpClient);

    private get headers() {
        return new HttpHeaders({
            'apikey': ANON_KEY,
            'Authorization': `Bearer ${ANON_KEY}`,
            'Content-Type': 'application/json'
        });
    }
    
    public getCats(): Observable<Cat[]> {
        return this.http.get<Cat[]>(`${URL}?select=*`, { headers: this.headers });
    }

    public editCat(id: number, updatedDay: string): Observable<Cat> {
        return this.http.patch<Cat>(`${URL}?id=eq.${id}`, { chosenDay: updatedDay }, { headers: this.headers });
    }

    public freeAllCats(id: number) {
        return this.http.patch<Cat[]>(`${URL}?id=gt.0`, { chosenDay: null }, { headers: this.headers });
    }
}

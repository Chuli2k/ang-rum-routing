import { ApmService } from './../apm.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {

  constructor(
    private http: HttpClient,
    private apm: ApmService,
  ) { }

  async ngOnInit() {
    const tr = this.apm.apm.startTransaction('test', 'custom');

    // const task1 = tr.addTask();

    const r1 = await this.http.get('http://localhost:52516/api/Test/Ping').toPromise(); // return OK

    const r2 = await this.http.get('http://localhost:52516/api/Test/Ping2').toPromise(); // wait 500ms then return OK

    const r3 = await this.http.get('http://localhost:52516/api/Test/Ping2').toPromise(); // wait 500ms then return OK

    // tr.removeTask(task1);

    tr.end();
  }

}

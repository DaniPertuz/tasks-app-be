import { Router } from 'express';

export enum TaskStatus {
  Pending = 'pending',
  Completed = 'completed'
}

export interface ITask {
  id?: string;
  title: string;
  body: string;
  status?: TaskStatus;
}

export interface ServerOptions {
  port: number;
  public_path?: string;
  routes: Router;
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule),
  }, 
  {
    path: 'students',
    loadChildren: () => import('../app/pages/students/students.module').then(m => m.StudentsModule),
  }, 
  {
    path: 'teacher',
    loadChildren: () => import('../app/pages/teachers/teachers.module').then(m => m.TeachersModule)
  },
  {
    path: 'teacherView',
    loadChildren: () => import('../app/pages/teacher-view/teacher-view.module').then(m => m.TeacherViewModule),
  },
  {
    path: 'familyView',
    loadChildren: () => import('../app/pages/family-view/family-view.module').then(m => m.FamilyViewModule),
  },
  {
    path: 'studentDetail/:id',
    loadChildren: () => import('../app/pages/student-detail/student-detail.module').then(m => m.StudentDetailModule),
  },
  {
    path: 'teacher-messages',
    loadChildren: () => import('../app/pages/messages-teachers/messages-teachers.module').then(m => m.MessagesTeachersModule),
  },
  {
    path: 'notifications',
    loadChildren: () => import('../app/pages/family-notifications/family-notifications.module').then(m => m.FamilyNotificationsModule),
  },
  {
    path: 'resources',
    loadChildren: () => import('../app/pages/family-resources/family-resources.module').then(m => m.FamilyResourcesModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('../app/pages/family-contact/family-contact.module').then(m => m.FamilyContactModule),
  },

  {
    path: '**',
    redirectTo: ''
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }






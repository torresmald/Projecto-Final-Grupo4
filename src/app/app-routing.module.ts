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
    path: 'about',
    loadChildren: () => import('../app/pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'myAccount',
    loadChildren: () => import('../app/pages/my-account/my-account.module').then(m => m.MyAccountModule)
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
    path: 'formResources',
    loadChildren: () => import('../app/pages/form-resources/form-resources.module').then(m => m.FormResourcesModule),
  },
  {
    path: 'resources',
    loadChildren: () => import('../app/pages/family-resources/family-resources.module').then(m => m.FamilyResourcesModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('../app/pages/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'privacity',
    loadChildren: () => import('../app/pages/privacity/privacity.module').then(m => m.PrivacityModule),
  },

  {
    path: 'register',
    loadChildren: () => import('../app/pages/register/register.module').then(m => m.
      RegisterModule)
  },


  {
    path: '**',
    loadChildren: () => import('../app/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }





/* Este código es un archivo de configuración de enrutamiento . Define las diferentes rutas disponibles en la aplicación, indicando el componente asociado a cada ruta.

El archivo importa los módulos necesarios desde el paquete `@angular/core` y `@angular/router`. Luego define una constante llamada `routes`, que contiene objetos con información sobre cada ruta disponible en la aplicación.

Finalmente, utiliza el decorador `NgModule` para definir la clase `AppRoutingModule`, que importa las rutas definidas mediante el método estático `forRoot()` del objeto RouterModule. También exporta RouterModule para proporcionar acceso a los servicios del router a otros componentes dentro de esta app.. */
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  
  const router = new Router();
  
  const logininfo = localStorage.getItem("user");
  if(logininfo != null){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};

import {Routes} from '@Angular/router';
import {PostComponent} from "./post/post.component";
import {PostListComponent} from "./post/postList.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";


export const routes: Routes = [
    {path: "", component: PostListComponent},
    {path: "post/:id", component: PostComponent},
    {path: "signin", component: SigninComponent},
    {path: "signup", component: SignupComponent}
];

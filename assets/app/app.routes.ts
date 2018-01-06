import {Routes} from '@Angular/router';
import {PostComponent} from "./post/post.component";
import {PostListComponent} from "./post/postList.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {MakePageComponent} from "./pagina/makePage.component";
import {PaginaComponent} from "./pagina/pagina.component";
import {HomeComponent} from "./home/home.component";


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "p/post/:id", component: PostComponent},
    {path: "signin", component: SigninComponent},
    {path: "signup", component: SignupComponent},
    {path: "p/:id", component: PaginaComponent},
    {path: "makepage", component: MakePageComponent},
];

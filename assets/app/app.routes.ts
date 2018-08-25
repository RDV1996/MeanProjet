import {Routes} from '@Angular/router';
import {PostComponent} from "./post/post.component";
import {PostListComponent} from "./post/postList.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {MakePageComponent} from "./pagina/makePage.component";
import {PaginaComponent} from "./pagina/pagina.component";
import {HomeComponent} from "./home/home.component";
import {MakePostComponent} from "./post/makePost.component";
import {UserPageComponent} from "./user/userPage.component";
import {PageModsComponent} from "./pagina/pageMods.component";
import {SearchComponent} from "./search/search.component";


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "p/post/:id", component: PostComponent},
    {path: "makepage", component: MakePageComponent},
    {path: "signin", component: SigninComponent},
    {path: "signup", component: SignupComponent},
    {path: "p/:id", component: PaginaComponent},
    {path: "p/makepost/:id", component: MakePostComponent},
    {path: "p/post/:id", component: MakePostComponent},
    {path: "p/mods/:id", component: PageModsComponent},
    {path: "profile/:id", component: UserPageComponent},
    {path: "search", component: SearchComponent}
];

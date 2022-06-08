import {Controller, Get} from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/a')
    getRootRoute() {
        return "Hello World!";
    }

    @Get('/by')
    getByThere() {
        return "Hello There!";
    }
}

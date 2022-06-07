import { Controller, Get } from "@nestjs/common";

@Controller()
class AppController {
  @Get()
  getRootRouter() {
    return "Hello World!";
  }
}

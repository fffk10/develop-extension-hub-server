import { Controller, Get } from '@nestjs/common';

@Controller('extensions')
export class ExtensionsController {
  @Get()
  searchExtensions() {}
}

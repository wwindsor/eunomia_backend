import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { InformeService } from './informe.service';
import { CreateInformeDto } from './dto/create-informe.dto';
import { UpdateInformeDto } from './dto/update-informe.dto';

@Controller('informe')
export class InformeController {
  constructor(private readonly informeService: InformeService) {}

  @Post()
  create(@Body() createInformeDto: CreateInformeDto) {
    return this.informeService.create(createInformeDto);
  }

  @Get()
  findAll() {
    return this.informeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.informeService.findOne(id);
  }

  @Get('asignacion/:id')
  findForAsignacion(@Param('id',ParseUUIDPipe) id: string) {
    return this.informeService.findForAsignacion(id);
  }

  @Get('proceso/:id')
  findForProceso(@Param('id',ParseUUIDPipe) id: string) {
    return this.informeService.findForProceso(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateInformeDto: UpdateInformeDto) {
    return this.informeService.update(id, updateInformeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.informeService.remove(id);
  }
}

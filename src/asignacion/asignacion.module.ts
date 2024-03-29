import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Defensor } from 'src/defensor/entities/defensor.entity';
import { Excusa } from 'src/excusa/entities/excusa.entity';
import { Proceso } from 'src/proceso/entities/proceso.entity';
import { AsignacionService } from './asignacion.service';
import { Asignacion } from './entities/asignacion.entity';
import { AsignacionController } from './asignacion.controller';
import { AsignacionEstado } from 'src/asignacion_estado/entities/asignacion_estado.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers:[AsignacionController],
  providers: [AsignacionService],
  imports: [
    TypeOrmModule.forFeature([Asignacion, Proceso, Defensor, Excusa, AsignacionEstado]),
    CommonModule
  ],
  exports: [AsignacionService]
})
export class AsignacionModule {}

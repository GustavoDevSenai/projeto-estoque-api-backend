import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovimentacaoService } from './movimentacoes.service';
import { CreateMovimentacaoDto } from './dto/CreateMovimentacaoDto';

@Controller('movimentacoes')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Post()
  create(@Body() dto: CreateMovimentacaoDto) {
    return this.movimentacaoService.create(dto);
  }

  @Get()
  findAll() {
    return this.movimentacaoService.findAll();
  }
}
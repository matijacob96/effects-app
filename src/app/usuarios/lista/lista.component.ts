import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe((users) => {
      console.log(users);
      this.usuarios = users;
    });
  }
}

import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfil:any = {
    nome: null,
    profissao: null,
    citacao: null,
    nome_usuario: null,
    localidade: null,
    data: null,
    biografia: null,
    estatisticas: {
      curtidas: 0,
      seguidores: 0,
      amigos: 0
    },
    postagem:[
      {
        foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgq.globo.com%2Festilo%2Fbeleza%2Fnoticia%2F2022%2F09%2Fcomo-cuidar-barba-cabelos-brancos.ghtml&psig=AOvVaw3cdV7sNYPJGRSDa20sCnTw&ust=1741885168784000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC-ws2ChYwDFQAAAAAdAAAAABAE',
        nome: 'carlos aontonio',
        nome_usuario: '@carlosantonio',
        texto: 'texto de exemplo',
        data: '12/3/25'
  
      },
      {
        foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgq.globo.com%2Festilo%2Fbeleza%2Fnoticia%2F2022%2F09%2Fcomo-cuidar-barba-cabelos-brancos.ghtml&psig=AOvVaw3cdV7sNYPJGRSDa20sCnTw&ust=1741885168784000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC-ws2ChYwDFQAAAAAdAAAAABAE',
        nome: 'carlos aontonio',
        nome_usuario: '@carlosantonio',
        texto: 'jsjxjsnxjsx texto de exemplo',
        data: '12/3/25'
  
      },
      {
        foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgq.globo.com%2Festilo%2Fbeleza%2Fnoticia%2F2022%2F09%2Fcomo-cuidar-barba-cabelos-brancos.ghtml&psig=AOvVaw3cdV7sNYPJGRSDa20sCnTw&ust=1741885168784000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC-ws2ChYwDFQAAAAAdAAAAABAE',
        nome: 'carlos aontonio',
        nome_usuario: '@carlosantonio',
        texto: 'texto de exemplo kjnxonxnsxsnxjsnxjsnxs ',
        data: '12/3/25'
  
      }
    ] 
  };

  constructor( ){ };

}

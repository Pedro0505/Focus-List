import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from 'src/infra/rabbitmq/rmq.service';

@Controller()
export class LoginController {
  constructor(private readonly rmqService: RmqService) {}

  public helloWorld() {
    return 'Hello World';
  }

  @EventPattern('create_user')
  public login(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(data);
    this.rmqService.ack(context);
  }
}

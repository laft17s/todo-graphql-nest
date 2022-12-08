import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'Hola mundo', name: 'hello' })
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => String, { description: 'Saluda a Luis', name: 'hello2' })
  helloWorld2(): string {
    return 'Hola Luis';
  }


  @Query(() => Float, {
    description: 'Retorna un número aleatorio',
    name: 'randomNumber',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    description: 'Retorna un número aleatorio desde cero hasta TO',
    name: 'randomNumberFromZeroTo',
  })
  getRandomFromZeroto(
    @Args('to', { nullable: true, type: () => Int }) to: number = 6,
  ): number {
    return Math.floor(Math.random() * to) + 1;
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createAll() {
    await this.prisma.product.createMany({
      data: [
        {
          name: 'Sushi de Salmão',
          description:
            'Uma seleção premium de 8 peças de sushi cuidadosamente elaboradas com salmão fresco de origem certificada, cortado em fatias finas e delicadas para realçar sua textura macia. O arroz é temperado com uma mistura artesanal de vinagre de arroz, açúcar e sal, garantindo um equilíbrio perfeito de sabores. Cada peça é finalizada com gergelim tostado, que adiciona uma crocância sutil, e acompanhada de um toque de molho shoyu caseiro com notas de umami. Ideal para quem busca uma experiência autêntica da culinária japonesa, harmonizando frescor e sofisticação em cada mordida.',
          price: 32.5,
          image:
            'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
          preparationTime: 20,
          categoryId: '2833035d-458a-4eb3-a1de-f04d6e457ea0',
        },
        {
          name: 'Pizza de Pepperoni',
          description:
            'Pizza média artesanal com uma massa de fermentação natural, leve e crocante, preparada com farinha de trigo premium e azeite de oliva extravirgem. Coberta com molho de tomate caseiro, feito com tomates San Marzano maduros, manjericão fresco e um toque de alho, esta pizza leva uma generosa camada de queijo mussarela de búfala derretida, fatias de pepperoni picante importado e orégano colhido no dia. Assada em forno de alta temperatura, forma uma crosta dourada e borbulhante, perfeita para compartilhar em momentos descontraídos com amigos ou família, trazendo o sabor clássico da Itália com um toque de rusticidade.',
          price: 45.0,
          image:
            'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
          preparationTime: 30,
          categoryId: '353a18c1-1feb-43e4-ad71-717c6c2f9313',
        },
        {
          name: 'Cheeseburger Bacon',
          description:
            'Hambúrguer artesanal robusto com 180g de carne bovina Angus, grelhada no ponto para preservar sua suculência e sabor intenso. Servido em um pão brioche macio, levemente tostado, é acompanhado por queijo cheddar inglês derretido, tiras de bacon defumado crocante, alface americana fresca para um toque crocante, fatias de tomate maduro e uma maionese caseira temperada com ervas frescas. Cada ingrediente é cuidadosamente selecionado para criar uma harmonia de sabores, ideal para os amantes de hambúrgueres que buscam uma experiência gastronômica rica e indulgente.',
          price: 28.9,
          image:
            'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
          preparationTime: 15,
          categoryId: '7bbb188d-897d-46b7-994b-1b0196f35f4a',
        },
        {
          name: 'Brigadeiro Tradicional',
          description:
            'Brigadeiro artesanal feito com chocolate belga 70% cacau, que confere um sabor intenso e levemente amargo, equilibrado pela doçura do leite condensado artesanal e um toque de manteiga premium. Enrolado à mão e coberto com granulado de chocolate belga fino, oferece uma textura cremosa que derrete na boca, com um acabamento aveludado. Perfeito para adoçar o dia, seja como sobremesa após uma refeição ou como um mimo em momentos especiais, trazendo o sabor clássico brasileiro com um toque de sofisticação.',
          price: 3.5,
          image:
            'https://images.pexels.com/photos/13219694/pexels-photo-13219694.jpeg',
          preparationTime: 10,
          categoryId: 'db3326e8-39b4-4da9-9c7a-df5e4a7eda74',
        },
        {
          name: 'Sushi de Atum',
          description:
            'Conjunto de 8 peças de sushi preparadas com atum fresco de corte premium, selecionado por sua textura firme e sabor rico. Cada peça combina cream cheese suave, que adiciona uma cremosidade delicada, com cebolinha picada finamente para um toque de frescor herbal. O arroz temperado, feito com vinagre de arroz artesanal, é envolto em alga nori crocante, garantindo uma experiência sensorial completa. Acompanhado de wasabi e gengibre em conserva, este prato é uma escolha sofisticada para os amantes da culinária japonesa que apreciam sabores equilibrados e autênticos.',
          price: 34.0,
          image:
            'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg',
          preparationTime: 20,
          categoryId: '2833035d-458a-4eb3-a1de-f04d6e457ea0',
        },
        {
          name: 'Pizza Margherita',
          description:
            'Pizza média com massa artesanal de longa fermentação, preparada com farinha italiana tipo 00 e azeite de oliva extravirgem, resultando em uma textura leve e crocante. Coberta com molho de tomate caseiro, feito com tomates frescos e manjericão, leva queijo mussarela de búfala artesanal, tomate cereja doce colhido no dia e folhas de manjericão fresco, que liberam um aroma herbal irresistível. Assada em forno à lenha, forma uma crosta dourada com bordas ligeiramente caramelizadas, ideal para quem busca o sabor clássico da Margherita italiana com um toque de frescor.',
          price: 42.0,
          image:
            'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg',
          preparationTime: 30,
          categoryId: '353a18c1-1feb-43e4-ad71-717c6c2f9313',
        },
        {
          name: 'Hambúrguer Vegano',
          description:
            'Hambúrguer vegano artesanal com um patty de grão-de-bico e quinoa, temperado com ervas frescas como coentro, salsinha e cominho, grelhado até atingir uma crosta dourada. Servido em um pão integral macio, leva alface americana crocante, fatias de tomate orgânico, cebola roxa fatiada finamente para um toque levemente picante e uma maionese vegana caseira feita com aquafaba e azeite de oliva. Uma opção saudável e saborosa, perfeita para quem busca uma refeição sem ingredientes de origem animal, mas repleta de sabor e textura.',
          price: 25.0,
          image:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
          preparationTime: 18,
          categoryId: '7bbb188d-897d-46b7-994b-1b0196f35f4a',
        },
        {
          name: 'Fatia de Bolo de Chocolate',
          description:
            'Fatia generosa de bolo de chocolate artesanal, preparado com cacau 100% puro, ovos caipiras, farinha de trigo premium e um toque de baunilha natural. Recheado com um creme de chocolate meio amargo, feito com chocolate belga, e coberto com uma ganache brilhante e sedosa, decorada com morangos frescos que adicionam um toque de frescor e acidez. Cada mordida oferece uma combinação de texturas aveludadas e sabores intensos, ideal para os amantes de sobremesas ricas e indulgentes.',
          price: 15.9,
          image:
            'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
          preparationTime: 12,
          categoryId: 'db3326e8-39b4-4da9-9c7a-df5e4a7eda74',
        },
        {
          name: 'Temaki de Salmão',
          description:
            'Temaki artesanal preparado com salmão fresco cortado em cubos precisos, garantindo uma textura macia e suculenta. Combina cream cheese cremoso para um toque aveludado, cebolinha picada finamente para frescor e arroz temperado com vinagre de arroz artesanal, envolto em uma alga nori crocante que mantém a estrutura perfeita. Acompanhado de molho shoyu com notas de umami e gengibre em conserva, é uma opção prática e saborosa para quem deseja uma refeição japonesa rápida e autêntica.',
          price: 18.0,
          image:
            'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg',
          preparationTime: 15,
          categoryId: '2833035d-458a-4eb3-a1de-f04d6e457ea0',
        },
        {
          name: 'Pizza de Frango com Catupiry',
          description:
            'Pizza média com massa de fermentação natural, feita com farinha italiana e azeite de oliva, resultando em uma crosta leve e crocante. Coberta com molho de tomate caseiro, preparado com tomates frescos e ervas, leva frango desfiado cozido lentamente para máxima suculência, queijo catupiry original para uma cremosidade única e milho doce colhido no dia, que adiciona um toque adocicado. Assada até dourar, é uma escolha clássica da culinária brasileira, perfeita para compartilhar em família.',
          price: 46.0,
          image:
            'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg',
          preparationTime: 32,
          categoryId: '353a18c1-1feb-43e4-ad71-717c6c2f9313',
        },
        {
          name: 'Burger Barbecue',
          description:
            'Hambúrguer artesanal com 200g de carne bovina Angus, grelhada no ponto para máxima suculência, servido em um pão brioche macio e tostado. Coberto com queijo prato derretido, cebola caramelizada lentamente com um toque de açúcar mascavo para um sabor adocicado, e molho barbecue defumado feito com tomate, melaço e especiarias. A combinação de sabores intensos e texturas contrastantes faz deste hambúrguer uma escolha perfeita para quem aprecia uma refeição robusta e cheia de personalidade.',
          price: 30.0,
          image:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
          preparationTime: 16,
          categoryId: '7bbb188d-897d-46b7-994b-1b0196f35f4a',
        },
        {
          name: 'Fatia de Torta de Limão',
          description:
            'Fatia de torta de limão artesanal com uma base crocante de biscoito maizena triturado, misturado com manteiga premium para uma textura perfeita. O recheio é feito com suco de limão siciliano fresco, leite condensado e gemas de ovos caipiras, criando uma cremosidade equilibrada entre o azedo e o doce. Finalizada com um merengue suíço leve, tostado delicadamente com maçarico para um toque caramelizado, é a sobremesa ideal para quem busca frescor e sofisticação.',
          price: 12.0,
          image:
            'https://images.pexels.com/photos/1893567/pexels-photo-1893567.jpeg',
          preparationTime: 10,
          categoryId: 'db3326e8-39b4-4da9-9c7a-df5e4a7eda74',
        },
        {
          name: 'Sushi California',
          description:
            '8 peças de sushi California, preparadas com kani desfiado de alta qualidade, pepino fatiado finamente para uma crocância refrescante e manga madura cortada em tiras para um toque doce e tropical. O arroz temperado com vinagre de arroz artesanal é envolto em alga nori crocante, garantindo uma textura equilibrada. Acompanhado de gengibre em conserva e wasabi, este prato é perfeito para quem busca sabores leves e uma experiência japonesa com um toque inovador.',
          price: 30.0,
          image:
            'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
          preparationTime: 20,
          categoryId: '2833035d-458a-4eb3-a1de-f04d6e457ea0',
        },
        {
          name: 'Pizza de Calabresa',
          description:
            'Pizza média com massa artesanal de longa fermentação, feita com farinha tipo 00 e azeite de oliva extravirgem, resultando em uma crosta crocante e leve. Coberta com molho de tomate caseiro, preparado com tomates frescos, alho e manjericão, leva uma generosa camada de queijo mussarela, rodelas de calabresa defumada artesanal, cebola fatiada finamente para um toque adocicado e orégano fresco. Assada até a crosta dourar, é uma escolha clássica para os amantes de pizza com sabores intensos.',
          price: 43.0,
          image:
            'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg',
          preparationTime: 30,
          categoryId: '353a18c1-1feb-43e4-ad71-717c6c2f9313',
        },
        {
          name: 'Hambúrguer Clássico',
          description:
            'Hambúrguer clássico com 150g de carne bovina selecionada, grelhada no ponto para preservar sua suculência. Servido em um pão macio de receita tradicional, leva queijo mussarela derretido, alface americana crocante, fatias de tomate maduro e um molho especial da casa, feito com maionese, mostarda Dijon e um toque de ervas frescas. Simples, mas repleto de sabor, é a escolha ideal para quem aprecia um hambúrguer tradicional com ingredientes frescos e bem equilibrados.',
          price: 22.5,
          image:
            'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg',
          preparationTime: 14,
          categoryId: '7bbb188d-897d-46b7-994b-1b0196f35f4a',
        },
        {
          name: 'Sorvete com Calda',
          description:
            'Porção de sorvete de creme artesanal, feito com leite fresco, baunilha natural de Madagascar e um toque de creme de leite, resultando em uma textura cremosa e suave. Servido com uma calda de chocolate quente preparada com chocolate belga 70% cacau, açúcar mascavo e um leve toque de canela, que adiciona profundidade ao sabor. Ideal para uma sobremesa rápida, esta combinação clássica oferece um equilíbrio perfeito entre o frescor do sorvete e a riqueza da calda.',
          price: 8.5,
          image:
            'https://images.pexels.com/photos/312420/pexels-photo-312420.jpeg',
          preparationTime: 8,
          categoryId: 'db3326e8-39b4-4da9-9c7a-df5e4a7eda74',
        },
        {
          name: 'Hot Roll Salmão',
          description:
            '8 peças de hot roll com salmão fresco empanado em farinha panko, frito até atingir uma crocância dourada e irresistível. Cada peça é recheada com cream cheese cremoso, que contrasta com a textura crocante do salmão, e finalizada com molho tarê caseiro, preparado com shoyu, açúcar e mirin, oferecendo um sabor doce e levemente picante. Envolto em alga nori e arroz temperado, é a escolha perfeita para quem busca uma experiência japonesa com sabores intensos e texturas contrastantes.',
          price: 36.0,
          image:
            'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg',
          preparationTime: 22,
          categoryId: '2833035d-458a-4eb3-a1de-f04d6e457ea0',
        },
        {
          name: 'Pizza Quatro Queijos',
          description:
            'Pizza média com massa artesanal de fermentação lenta, feita com farinha italiana e azeite de oliva, resultando em uma crosta leve e crocante. Coberta com uma combinação de quatro queijos premium: mussarela derretida, parmesão ralado na hora, gorgonzola cremoso para um toque picante e provolone defumado para profundidade de sabor. Assada em forno de alta temperatura até formar uma crosta dourada e borbulhante, é a escolha ideal para os amantes de queijos que buscam uma explosão de sabores.',
          price: 48.0,
          image:
            'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg',
          preparationTime: 32,
          categoryId: '353a18c1-1feb-43e4-ad71-717c6c2f9313',
        },
        {
          name: 'Spicy Burger',
          description:
            'Hambúrguer artesanal com 180g de carne bovina Angus, grelhada para manter sua suculência e sabor intenso. Servido em um pão brioche tostado, leva queijo cheddar derretido, cebola roxa fatiada finamente para um toque levemente picante e um molho picante caseiro, feito com pimenta jalapeño, maionese e um toque de limão. A combinação de sabores ousados e texturas contrastantes faz deste hambúrguer uma escolha perfeita para quem gosta de uma experiência gastronômica com um toque de ousadia.',
          price: 29.9,
          image:
            'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg',
          preparationTime: 16,
          categoryId: '7bbb188d-897d-46b7-994b-1b0196f35f4a',
        },
        {
          name: 'Pavê de Chocolate',
          description:
            'Porção de pavê de chocolate artesanal, com camadas alternadas de creme de chocolate belga 70% cacau, preparado com leite condensado, creme de leite fresco e um toque de licor de cacau para intensificar o sabor. As camadas são intercaladas com biscoitos champagne embebidos em leite, garantindo uma textura macia e úmida. Finalizado com raspas de chocolate ao leite e um toque de cacau em pó, é a sobremesa perfeita para quem busca uma experiência rica e indulgente.',
          price: 10.0,
          image:
            'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg',
          preparationTime: 10,
          categoryId: 'db3326e8-39b4-4da9-9c7a-df5e4a7eda74',
        },
      ],
    });
  }

  async findAll() {
    const products = await this.prisma.product.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    return products;
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    return product;
  }
}

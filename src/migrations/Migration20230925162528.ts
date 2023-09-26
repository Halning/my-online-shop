import { Migration } from '@mikro-orm/migrations';

export class Migration20230925162528 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "cart_id" uuid not null;');
    this.addSql('alter table "user" add constraint "user_cart_id_foreign" foreign key ("cart_id") references "cart" ("id") on update cascade;');
    this.addSql('alter table "user" add constraint "user_cart_id_unique" unique ("cart_id");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_cart_id_foreign";');

    this.addSql('alter table "user" drop constraint "user_cart_id_unique";');
    this.addSql('alter table "user" drop column "cart_id";');
  }

}

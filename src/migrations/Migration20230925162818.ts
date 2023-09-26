import { Migration } from '@mikro-orm/migrations';

export class Migration20230925162818 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_cart_id_foreign";');

    this.addSql('alter table "user" drop constraint "user_cart_id_unique";');
    this.addSql('alter table "user" drop column "cart_id";');

    this.addSql('alter table "cart" alter column "user_id" drop default;');
    this.addSql('alter table "cart" alter column "user_id" type uuid using ("user_id"::text::uuid);');
    this.addSql('alter table "cart" add constraint "cart_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
    this.addSql('alter table "cart" add constraint "cart_user_id_unique" unique ("user_id");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "cart" alter column "user_id" type text using ("user_id"::text);');

    this.addSql('alter table "cart" drop constraint "cart_user_id_foreign";');

    this.addSql('alter table "cart" alter column "user_id" type varchar(255) using ("user_id"::varchar(255));');
    this.addSql('alter table "cart" drop constraint "cart_user_id_unique";');

    this.addSql('alter table "user" add column "cart_id" uuid not null;');
    this.addSql('alter table "user" add constraint "user_cart_id_foreign" foreign key ("cart_id") references "cart" ("id") on update cascade;');
    this.addSql('alter table "user" add constraint "user_cart_id_unique" unique ("cart_id");');
  }

}

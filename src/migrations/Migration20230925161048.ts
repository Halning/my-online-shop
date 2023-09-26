import { Migration } from '@mikro-orm/migrations';

export class Migration20230925161048 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "order" alter column "status" type varchar(255) using ("status"::varchar(255));');

    this.addSql('alter table "user" alter column "id" drop default;');
    this.addSql('alter table "user" alter column "id" type uuid using ("id"::text::uuid);');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" alter column "id" type text using ("id"::text);');

    this.addSql('alter table "order" alter column "status" type smallint using ("status"::smallint);');

    this.addSql('alter table "user" alter column "id" type varchar(255) using ("id"::varchar(255));');
  }

}

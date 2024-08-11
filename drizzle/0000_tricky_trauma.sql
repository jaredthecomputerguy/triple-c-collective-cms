CREATE TABLE `triple-c-collective-cms_account` (
	`user_id` text(255) NOT NULL,
	`type` text(255) NOT NULL,
	`provider` text(255) NOT NULL,
	`provider_account_id` text(255) NOT NULL,
	`refresh_token` text,
	`access_token` text,
	`expires_at` integer,
	`token_type` text(255),
	`scope` text(255),
	`id_token` text,
	`session_state` text(255),
	PRIMARY KEY(`provider`, `provider_account_id`),
	FOREIGN KEY (`user_id`) REFERENCES `triple-c-collective-cms_user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `triple-c-collective-cms_deal` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`active` integer NOT NULL,
	`title` text(256) NOT NULL,
	`description` text(256) NOT NULL,
	`image_url` text(256) NOT NULL,
	`brands` text(256) NOT NULL,
	`categories` text(256) NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE TABLE `triple-c-collective-cms_session` (
	`session_token` text(255) PRIMARY KEY NOT NULL,
	`userId` text(255) NOT NULL,
	`expires` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `triple-c-collective-cms_user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `triple-c-collective-cms_user` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`name` text(255),
	`email` text(255),
	`email_verified` integer DEFAULT (unixepoch()),
	`image` text(255)
);
--> statement-breakpoint
CREATE TABLE `triple-c-collective-cms_verification_token` (
	`identifier` text(255) NOT NULL,
	`token` text(255) NOT NULL,
	`expires` integer NOT NULL,
	PRIMARY KEY(`identifier`, `token`)
);
--> statement-breakpoint
CREATE INDEX `account_user_id_idx` ON `triple-c-collective-cms_account` (`user_id`);--> statement-breakpoint
CREATE INDEX `title_idx` ON `triple-c-collective-cms_deal` (`title`);--> statement-breakpoint
CREATE INDEX `session_userId_idx` ON `triple-c-collective-cms_session` (`userId`);
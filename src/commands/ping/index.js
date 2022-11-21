import { SlashCommandBuilder } from 'discord.js';

export function data() {
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');
}

export function execute(interaction: any) {
  interaction.reply('Pong!');
}

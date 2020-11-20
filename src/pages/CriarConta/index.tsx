import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import criarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';


//toda pag possui um pag template
//pagtemplate defini cabeçalho e rodape

const categoria = ['Discente', 'Docente']
const funcao = ['Membro', 'Líder']
const titulacao = ['Graduando', 'Graduado', 'Mestrado', 'Doutorado']

const Form = styled.form`
    font-family: 'Roboto', sans-serif;
    margin: 50px auto;
    width: 90%;

`

const FieldSet = styled.fieldset`
    border: none;

`

const Legend = styled.legend`
    font-size: 2.4rem;
    color: var(--primaria);
`

const NameContainer = styled.div`

`

const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--bordas);
    border-radius: 50%;
    margin-top: 20px;
`

const Name = styled.div`

`

const Contato = styled.div`

`

const Property = styled.div`

`

const TopFieldSet = styled.div`
    display: flex;
    justify-content: space-between;
`

const PlusButton = styled.button`
    border: none;
    background-color: var(--branco);
    color: var(--secundaria);
    font-size: 1.6rem;
    font-weight: bold;
`
const TitleContainer = styled.div`

`

export default function CriarConta (){
    return(
        <PageTemplate
            imagemSrc={criarContaImg}
            imagemAlt="Imagem de Criar conta"
            title="Criar conta"
            description="Descrição - drdfd Criar conta"
        >

            <Form>
                <FieldSet>
                    <Legend>
                        Seus Dados
                    </Legend>

                    <NameContainer>
                        <Photo></Photo>
                        <Name>
                            <Input type="text" name="name" label="Nome" />
                            <Input type="text" name="lastname" label="Sobrenome"/>
                        </Name>                        
                    </NameContainer>
                    <Contato>
                            <Input 
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="exemplo@email.com"
                                />
                            <Input 
                                type="number"
                                name="phone"
                                label="Telefone"
                                placeholder="(__)9 ____ ____"
                                />
                    </Contato>
                    <Input type="text" name="course" label="Curso"/>
                    <Property>
                        <Select
                            name="category"
                            label="Categoria (discente,docente)"
                            options={categoria}
                        />                   
                        <Select
                            name="occupation"
                            label="Função (membro, Líder)"
                            options={funcao}
                        />
                        <Select
                            name="degree"
                            label="Titulação (graduado, mestre)"
                            options={titulacao}
                        />
                    </Property>
                    <TextArea name="bio" label="Bio (max 300 caracteres)"/>
                </FieldSet>   
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Áreas de Interesse
                        </Legend>
                        <PlusButton>
                            +Área
                        </PlusButton>
                    </TopFieldSet>
                    <Input name="area" label="Área de Interesse" />
                </FieldSet>
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Publicações
                        </Legend>
                        <PlusButton>
                            +Publicações
                        </PlusButton>
                    </TopFieldSet>
                    <TitleContainer>
                        <Input name="publication_title" label="Título" />
                        <Input name="publication_year" label="Ano" />
                    </TitleContainer>
                    <TextArea name="publication_reference" label="Referência ABNT (max. 300 caracteres)"/>
                </FieldSet>        
            </Form>
        </PageTemplate>
    );
}
#include<iostream>

using namespace std;

struct Node{
    int data;
    Node* next;
};


void add(Node* head,int data){
   
    
}

void dis(Node*head){
    while(head != NULL){
        cout<<head->data<<" o";
        head = head->next;
    }

}


int main(){
    
    Node* head = new Node;
    head->data = 12;
    head->next = NULL;
   
    dis(head);

    return 0;
}